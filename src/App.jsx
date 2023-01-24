import { useState } from 'react'
import { Configuration, OpenAIApi } from "openai"
import './App.css'

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);
  
  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
  });
    setResult(res.data.data[0].url);  
}

  return (
    <div className="app-main">
   <h2>Image Generator</h2>
    <p>Please provide a description</p>
   <input 
    className='app-input' 
    placeholder='Describe The Image You Want'
    onChange={(e) => setPrompt(e.target.value)}
    />
   <button onClick={generateImage}>Generate</button>
   
   {result.length > 0 ? <img className='image-result' src={result} alt="result" /> : <></>}
    </div>
  )
}
