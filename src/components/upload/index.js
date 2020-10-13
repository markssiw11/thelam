import { Platform } from 'react-native'
import { type Image } from 'react-native-image-crop-picker'
import RNFS from 'react-native-fs'
import CameraRoll, { type PhotoIdentifier } from '@react-native-community/cameraroll'
import { type CancelToken } from 'axios'
import * as config from './config'
import httpClient from './httpClient'
import imageTools from './imageTools'
​
export type CloudinaryMedia = {
  type: string,
  id: string,
  thumbnailLink: string,
  videoPreviewLink: string,
  fullLink: string
}
​
const rootUrl = `https://res.cloudinary.com/${config.cloudinary.cloudName}`
const joiningSize = 600
​
const transformAll = [
  null,
  [`w_${joiningSize},h_${joiningSize},c_fill`],
  [`w_${joiningSize / 2},h_${joiningSize},c_fill`, `w_${joiningSize / 2},h_${joiningSize},c_fill,x_${joiningSize / 2}`],
  [
    `w_${joiningSize / 2},h_${joiningSize},c_fill`,
    `w_${joiningSize / 2},h_${joiningSize / 2},c_fill,x_${joiningSize / 2},y_-${joiningSize / 4}`,
    `w_${joiningSize / 2},h_${joiningSize / 2},c_fill,x_${joiningSize / 4},y_${joiningSize / 4}`
  ],
  [
    `w_${joiningSize / 2},h_${joiningSize / 2},c_fill`,
    `w_${joiningSize / 2},h_${joiningSize / 2},c_fill,y_${joiningSize / 2}`,
    `w_${joiningSize / 2},h_${joiningSize / 2},c_fill,x_${joiningSize / 2},y_-${joiningSize / 4}`,
    `w_${joiningSize / 2},h_${joiningSize / 2},c_fill,x_${joiningSize / 4},y_${joiningSize / 4}`
  ]
]
​
const uploadFile = (
  file: Image,
  preferData?: boolean,
  onUploadProgress?: ({ loaded: number, total: number }) => any,
  cancelToken?: CancelToken
) =>
  new Promise<string>(async resolve => {
    const { width, height, data } = file
​
    let fileUri: string = file.uri || file.path
​
    console.log('NEED TO TEST WITH ANDROID')
​
    if (fileUri === file.path && !fileUri.startsWith('file://')) {
      fileUri = `file://${fileUri}`
    }
​
    if (preferData && data) {
      // use resize function for create a tmp file from data
      const tmpFile = await imageTools.resize(
        file,
        {
          width,
          height
        },
        true
      )
​
      fileUri = tmpFile.uri || tmpFile.path
    }
​
    const formData = new FormData()
    formData.append('api_key', config.cloudinary.apiKey)
    formData.append('file', {
      name: imageTools.getImageUniqueId(file),
      uri: fileUri,
      size: file.size,
      type: file.mime
    })
    formData.append('upload_preset', config.cloudinary.unsignUploadPreset)
​
    console.log('Uploading media', file)
​
    httpClient.cloudinary
      .post<{
        public_id: string
      }>('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress,
        cancelToken
      })
      .then(({ data: { public_id, resource_type } }) => {
        resolve(`${resource_type}|${public_id}`)
      })
      .catch(error => {
        console.log(error)
​
        resolve('')
      })
  })
​const cloudinaryUpload = (photo) => {
  const data = new FormData()
  data.append('file', photo)
  data.append('upload_preset', 'thelam')
  data.append("cloud_name", "thelam")
  fetch("https://api.cloudinary.com/v1_1/thelam/upload", {
    method: "post",
    body: data
  }).then(res => res.json()).
    then(data => {
      setPhoto(data.secure_url)
    }).catch(err => {
      Alert.alert("An Error Occured While Uploading")
    })
}
const upload = async (files: File[]) => {
  const uploadTasks: Promise<string>[] = []
​
  for (let i = 0; i < files.length; i += 1) {
    const task = uploadFile(files[i])
​
    uploadTasks.push(task)
  }
​
  const mediaIds = await Promise.all(uploadTasks)
​
  return mediaIds.filter(p => p !== '')
}
​
const getThumbnailLink = (mediaId: string) => {
  const [type, id] = mediaId.split('|')
​
  if (type === 'image') {
    return `${rootUrl}/image/upload/c_thumb,w_300,ar_1:1,g_face/${id}`
  }
​
  return `${rootUrl}/video/upload/c_thumb,w_300,ar_1:1,g_face/${id}.jpg`
}
​
const getFullLink = (mediaId: string) => {
  const [type, id] = mediaId.split('|')
​
  if (type === 'image') {
    return `${rootUrl}/image/upload/${id}`
  }
​
  return `${rootUrl}/video/upload/${id}.mp4`
}
​
const getMedia = (mediaId: string): CloudinaryMedia => {
  const [type, id] = mediaId.split('|')
​
  return {
    type,
    id,
    thumbnailLink: getThumbnailLink(mediaId),
    fullLink: getFullLink(mediaId),
    videoPreviewLink: type === 'video' ? `${rootUrl}/video/upload/${id}.jpg` : null
  }
}
​
const getJoinedMediaImgLink = (inputMediasIds: string[], fallback: string) => {
  if (!inputMediasIds || inputMediasIds.length === 0) {
    return fallback
  }
​
  let medias = inputMediasIds.map<CloudinaryMedia>(x => getMedia(x))
​
  const firstVideo = medias.find(x => x.type === 'video')
​
  if (firstVideo) {
    medias = [firstVideo, ...medias.filter(x => x.type === 'image')]
  }
​
  medias = medias.slice(0, 4)
​
  const videoExists = medias[0].type === 'video'
​
  if (videoExists) {
    medias[0].id += '.jpg'
  }
​
  for (let i = 1; i < medias.length; i++) {
    medias[i].id = medias[i].id.replace(/\//g, ':')
  }
​
  let result = `${rootUrl}/${videoExists ? 'video' : 'image'}/upload/`
  const transforms = transformAll[medias.length]
​
  for (let i = medias.length - 1; i >= 0; i--) {
    if (i !== 0) {
      medias[i].id = `l_${medias[i].id.replace(/\//g, ':')}`
    }
​
    result += `${transforms[medias.length - 1 - i]}/${medias[i].id}${i === 0 ? '' : ','}`
  }
​
  return result
}
​
export type MediaFileResult = {
  type: string,
  uri: string,
  height: number,
  width: number,
  duration: number,
  resolvedUri: string
}
​
const resolveMediaFileUri = async (mediaFile: MediaFileResult) => {
  if (Platform.OS === 'android' || !mediaFile.uri.startsWith('ph://')) return mediaFile.uri
​
  const isVideo = mediaFile.type.startsWith('video')
​
  const regex = /:\/\/(.{36})\//i
  const regexResult = mediaFile.uri.match(regex)
  const photoPATH = `assets-library://asset/asset.${isVideo ? 'MP4' : 'JPG'}?id=${regexResult[1]}&ext=${
    isVideo ? 'MP4' : 'JPG'
  }`
​
  const dest = `${RNFS.TemporaryDirectoryPath}${Math.random()
    .toString(36)
    .substring(7)}.${isVideo ? 'mp4' : 'jpg'}`
​
  const resolvedUri = await (isVideo
    ? RNFS.copyAssetsVideoIOS(photoPATH, dest)
    : RNFS.copyAssetsFileIOS(photoPATH, dest, mediaFile.width, mediaFile.height, 1, 0.8, 'stretch'))
​
  return resolvedUri
}
​
const getMediaFilesFromDevice = async (size: number, type: 'All' | 'Photos', start?: string) => {
  const { edges, page_info } = await CameraRoll.getPhotos({
    first: size,
    groupTypes: 'All',
    assetType: type,
    after: start
  })
​
  return {
    end: page_info.has_next_page ? page_info.end_cursor : 'ended',
    files: edges.map<MediaFileResult>(
      ({
        node: {
          image: { uri, height, width, playableDuration },
          type: edgeType
        }
      }) => ({
        type: edgeType,
        uri,
        height,
        width,
        duration: playableDuration
      })
    )
  }
}
​
export default {
  uploadFile,
  upload,
  getThumbnailLink,
  getFullLink,
  getMedia,
  getJoinedMediaImgLink,
  getMediaFilesFromDevice,
  resolveMediaFileUri
}