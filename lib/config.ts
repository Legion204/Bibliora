const config = {
  env: {
    apiEndPoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    imagekit: {
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_KEY!,
      privateKey: process.env.IMAGEKIT_PRIVET_KEY!,
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
    },
    databaseUrl:process.env.DATABASE_URL!,
  },
};

export default config;
