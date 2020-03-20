import React from 'react';
import DocPage from '@/components/DocPage'
import List from '@/packages/list'
import md from "./readme.md";

const Doc = () => {
  const explains = [
    '使用一',
    '使用二'
  ]
  return (
    <DocPage title="列表" explains={explains}>
      <DocPage.Item title="列表说明" description="列表使用。" md={md} >
        <List>
          <List.Item>列表一</List.Item>
          <List.Item>列表二</List.Item>
          <List.Item>列表三</List.Item>
        </List>
      </DocPage.Item>
    </DocPage>
  );
}

export default Doc;