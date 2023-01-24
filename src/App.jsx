import { useState } from 'react'
import { Configuration, OpenAIApi } from "openai"
import './App.css'

export default function App() {
  const [prompt, setPrompt] = useState('');
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
  console.log(res.data.data[0].url);
}

  return (
    <>
    <div className="app-main">
   <h2>Let's Do This</h2>
   <input 
    className='app-input' 
    placeholder='Type A Description'
    onChange={(e) => setPrompt(e.target.value)}
    />
   <button onClick={generateImage}>Generate Image</button>
    </div>
  </>
  )
}
