const conf = {
  appwrite : String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectID : String(import.meta.env.VITE_PROJECT_ID),
  appwritedatabseID : String(import.meta.env.VITE_DATABASE_ID),
  appwritecollectionID : String(import.meta.env.VITE_COLLECTION_ID),
  appwritebucketID : String(import.meta.env.VITE_BUCKET_ID),
}

export default conf