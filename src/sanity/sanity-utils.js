import client from "./client";

export async function getImageData() {
  return client.fetch(`*[_type == "imagePost"] {
          _id, 
          name, 
          file{
            asset->{
             _id,
             url
            },
          },
          signature,
          _type,
          _createdAt,
        }`);
}

export async function getTextData() {
  return client.fetch(`*[_type == "textPost"] {
          _id,
          name,
          text,
          signature,
          _type, 
          _createdAt,
        }`);
}

export async function getAudioData() {
  return client.fetch(`*[_type == "audioPost"] {
          _id, 
          name, 
          file{
            asset->{
             _id,
             url
            },
          },
          signature,
          _type,
          _createdAt,
        }`);
}

export async function getVideoData() {
  return client.fetch(`*[_type == "videoPost"] {
          _id, 
          name, 
          file{
            asset->{
             _id,
             url
            },
          },
          signature,
          _type,
          _createdAt,
        }`);
}
