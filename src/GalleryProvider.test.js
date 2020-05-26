import React from 'react';
import { shallow } from 'enzyme';
import GalleryProvider from './GalleryProvider';
import Gallery from './Gallery';

const RESPONSE_FLICKR = {
  photos: {
    page: 1,
    pages: 2853,
    perpage: 2,
    total: '45642',
    photo: [
      {
        id: '48576843611',
        owner: '11368020@N03',
        secret: '02c2057179',
        server: '65535',
        farm: 66,
        title: 'USNS Piliaau T-AKR-304',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0,
      },
      {
        id: '48576995382',
        owner: '11368020@N03',
        secret: '3a80637176',
        server: '65535',
        farm: 66,
        title: 'Freedom',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0,
      },
    ],
  },
  stat: 'ok',
};

const mockFetch = data =>
  jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data,
    }),
  );

beforeEach(() => {
  global.fetch = mockFetch(RESPONSE_FLICKR);
});

it('fetches pictures on mount and passes on', () => {
  const wrapper = shallow(
    <GalleryProvider>
      {({ photos }) => <Gallery photos={photos} />}
    </GalleryProvider>,
  );

  expect(fetch).toHaveBeenCalledWith(
    'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ffee324251c2815b9b895133af851243&safe_search=1&content_type=1&sort=relevance&text=vessel%20marine&format=json&nojsoncallback=1&per_page=16',
  );

  expect(wrapper.find(Gallery).prop('photos')).toEqual(RESPONSE_FLICKR.photo);
});
