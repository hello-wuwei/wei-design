import React from 'react';
import Button from '@/packages/button'
import DocPage from '@/components/DocPage'
import md from "./readme.md";
// import { Playground } from 'docz'
// import Button from '../../../lib/button'
const Doc = () => {
  const explains = [
    '使用一',
    '使用二'
  ]
  return (
    <DocPage title="按钮" explains={explains}>
      <DocPage.Item title="按钮类型" description="按钮有四种类型：主按钮、次按钮、虚线按钮。" md={md} >
        <Button style={{ marginRight: 16 }}>Default</Button>
        <Button style={{ marginRight: 16 }} type="primary">Primary</Button> 
        <Button style={{ marginRight: 16 }} type="danger">Danger</Button> 
        <Button style={{ marginRight: 16 }} type="dashed">Dashed</Button>
      </DocPage.Item>
    </DocPage>
  );
}

export default Doc;