import  sanityClient  from "@sanity/client";
import ImageUrlBuilder  from "@sanity/image-url";

export const client = sanityClient ({
    projectId : 'h93nwzq8',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn : true,
    token: process.env.SANITY_TOKEN
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);


