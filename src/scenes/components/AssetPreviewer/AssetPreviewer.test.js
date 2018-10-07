import React from 'react';
import { mount } from 'enzyme';

import AssetPreviewer from './AssetPreviewer';

const props = {
  asset: {
    assetId: 'testAssetId',
    size: {
      width: 5,
      height: 10,
    },
  },
};

describe('<AssetPreviewer />', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <AssetPreviewer
        asset={props.asset}
        imagePath="testImagePath"
      />
    );

    expect(wrapper.find(AssetPreviewer)).toHaveLength(1);
  });

  it('has proper classname if asset is vertical', () => {
    const wrapper = mount(
      <AssetPreviewer
        asset={props.asset}
        imagePath="testImagePath"
        isVertical={true}
      />
    );

    expect(wrapper.find('img.vertical')).toHaveLength(1);
  });

  it('has proper classname if asset is horizontal', () => {
    const wrapper = mount(
      <AssetPreviewer
        asset={props.asset}
        imagePath="testImagePath"
      />
    );

    expect(wrapper.find('img.vertical')).toHaveLength(0);
  });
});
