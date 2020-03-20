import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'  //代码块样式
import styles from './index.module.less'

const DocPage = ({ title, explains, children }) => {
  return (
    <div className={styles.doc}>
      <h1>{ title }</h1>
      <div className="explains">
        <h3>何时使用</h3>
        <ul>{ explains.map(explain => <li key={explain}>{explain}</li>) }</ul>
      </div>
      <div className="code-view">
        <h3>代码展示</h3>
        <ul>{ children }</ul>
      </div>
    </div>
  )
}

const HightLightCode = (props) => {
  
  const ref = useRef(null)
  const highlightCode = () => {
    hljs.highlightBlock(ref.current)
  }
  useEffect(() => {
    highlightCode()
  }, [])
  return (
    <pre>
      <code ref={ref}>
        {props.value}
      </code>
    </pre>
  )
}

const Item = ({ title, description, children, md }) => {
  return (
    <div className={styles.item}>
      <h4>{ title }</h4>
      <div className="description">{ description }</div>
      <div className="ui">{ children }</div>
      <div>
        <ReactMarkdown parseHtml={true} source={md} renderers={{code: HightLightCode}} />
      </div>
    </div>
  );
}

DocPage.Item = Item

export default DocPage;