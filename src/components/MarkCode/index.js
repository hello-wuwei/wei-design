import React, { useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'  //代码块样式

const MarkCode = (props) => {
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

  return <ReactMarkdown renderers={{code: HightLightCode}} {...props} />
}

export default MarkCode
