export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        Object.keys(options).map(key => (
              <button key={key} name={key} type='button' onClick={onLeaveFeedback}>{key}</button>
          ))
    )
}