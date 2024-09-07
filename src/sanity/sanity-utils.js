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
          cover,
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

export async function getAgujaDates() {
  return client.fetch(`*[_type == "fechasAguja"] | order(date desc) {
          _id, 
          date,
          name, 
          place,
          time,
          info,
          link
        }`);
}

export async function getLinksAndFiles() {
  return client.fetch(`*[_type == "linksAndFiles"] | order(_createdAt asc) {
          _id, 
          name, 
          link
        }`);
}
