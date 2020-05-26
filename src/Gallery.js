import React from 'react';
import { Flex, Box, Card, Image, Text } from 'rebass';

const getPicUrl = photo =>
  `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${
    photo.secret
  }_m.jpg`;

const Gallery = ({ photos }) => (
  <Flex flexWrap="wrap">
    {photos &&
      photos.map(pic => (
        <Box p={2} key={pic.id}>
          <Card width={240} mx="auto">
            <Image src={getPicUrl(pic)} width={240} />
            <Text>{pic.title}</Text>
          </Card>
        </Box>
      ))}
  </Flex>
);
export default Gallery;
