import React from 'react';
import DocPage from '@/components/DocPage'
import Card from '@/packages/card'
import md from "./readme.md";
const img = require('@/assets/images/pic.jpg')

const Doc = () => {
  const explains = [
    '使用一',
    '使用二'
  ]
  return (
    <DocPage title="卡片" explains={explains}>
      <DocPage.Item title="卡片类型" description="卡片使用说明" md={md} >
        <Card>
          <img src={img} />
        </Card>
      </DocPage.Item>
    </DocPage>
  );
}

export default Doc;