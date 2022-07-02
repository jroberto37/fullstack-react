import { useState } from "react"
import './app.css'

const Button = ({functionEvent, text}) => {
  return(
    <>
      <button onClick={ functionEvent } >{text}</button>
    </>
  )
}

const Message = ({feedback, statics}) => {
  if (statics.all > 0) {
    return(
      <>
        <h2>Statics</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">good</td>
              <td>{ feedback.good }</td>              
            </tr>
            <tr>
              <td scope="row">neutrals </td>
              <td>{ feedback.neutral }</td>
            </tr>
            <tr>
              <td scope="row">bad</td>
              <td>{ feedback.bad }</td>
            </tr>            
          </tbody>
        </table>

      </>
    )
  }else{
    return(<h3>No feedback given</h3>)
  }
}

const Static = ({feedback, statics}) => {
  if (statics.all > 0 ){
    return(
      <>
        <table className="table">
          <tbody>
            <tr>
              <td scope="row">all</td>
              <td>{ statics.all }</td>
            </tr>
            <tr>
              <td scope="row">average</td>
              <td>{ isNaN( (( statics.positives - statics.negatives ) / statics.all) ) ? 0 : (( statics.positives - statics.negatives ) / statics.all) }</td>
            </tr>
            <tr>
              <td scope="row">positive</td>
              <td>{ isNaN( feedback.good / statics.all ) ? 0 : (feedback.good / statics.all) * 100 }</td>
            </tr>            
          </tbody>
        </table>
      </>
    )
  }
}

const App = () =>  {
  const message = 'Give feedback'
  const [feedback, setFeedBack] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const [statics, setStatics] = useState({
    all: 0,
    positives: 0,
    negatives: 0
  })

  return (
    <>
      <h1>{ message }</h1>
      <Button functionEvent = { 
        () => {
          
          setFeedBack({ good: feedback.good += 1, ...feedback })
          setStatics({ all: statics.all += 1, positives: statics.positives += 1, ...statics })
        
        }} text="good" />
      <Button functionEvent = { () => {

          setFeedBack( { neutral: feedback.neutral += 1, ...feedback } ) 
          setStatics(  { all: statics.all += 1, ...statics} )

        }} text="neutral" /> 
      <Button functionEvent = { () => {

          setFeedBack( { bad: feedback.bad += 1, ...feedback } ) 
          setStatics( { all: statics.all += 1, negatives: statics.negatives += 1, ...statics } )

        }} text="bad" />
      
      <Message feedback = { feedback } statics = { statics } />
      <Static feedback = { feedback } statics = { statics } />
      
    </>
  )
}

export default App;
