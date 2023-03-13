import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'Đỉnh Cao Collab',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/e/3/d/6e3d0d92fdc1981e6ad33ee305bb0817.jpg',
    },
    {
      id: 2,
      name: 'Nhạc Chạy Deadline',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/d/f/7/b/df7b250b1cba47db66af2e4447d97126.jpg',
    },
    {
      id: 3,
      name: 'Nhạc Mới Mỗi Ngày',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/8/5/0/7850f12e4e7caf3097fd30703bf484ab.jpg',
    },
  ];

  return (
    <div>
      <h2>Lựa Chọn Hôm Nay</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
