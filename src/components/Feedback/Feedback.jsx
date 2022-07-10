import { Component } from 'react';
import  Notiflix from 'notiflix';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import { Container } from './Feedback.styled';

Notiflix.Notify.init({
    fontSize: '15px',
    cssAnimationStyle: 'from-top',
    success: {
    background: "#32c6b0",
    }
})

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleStateClick = (e) => {
        Notiflix.Notify.success(`Thank you for leaving a ${e.target.name} feedback!`);
        this.setState(prevState => ({[e.target.name]: prevState[e.target.name] + 1}))
    }

    countTotalFeedback = () => {
      return Object.values(this.state).reduce((acc, value) => {return acc += value}, 0)
    }

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        const { good } = this.state;
        if (good !== 0) {
            const result = good * 100 / total;
            return Math.round(result);
        } else {
            return 0;
        }
    }

    render() {
        const { state, handleStateClick, countTotalFeedback, countPositiveFeedbackPercentage} = this;
        return <>
        <Container>
            <Section title="Please leave feedback">
            <FeedbackOptions options={state} onLeaveFeedback={handleStateClick} />
            {countTotalFeedback() > 0
            ? <Statistics options={state} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
            : <h2>There is no feedback</h2>}
            </Section>
            </Container>
            </>
  }
}

export default Feedback;

        // <Section title="Please leave feedback">
        //   <FeedbackOptions options={state} onLeaveFeedback={handleStateClick}/>
        //     {countTotalFeedback() > 0
        //         ? <Statistics options={state} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
        //         : <h2>There is no feedback</h2>}
        //         </Section>



// {handleDecision() === 'agree'
//             ? <Section title="Please leave feedback">
//           <FeedbackOptions options={state} onLeaveFeedback={handleStateClick}/>
//             {countTotalFeedback() > 0
//                 ? <Statistics options={state} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
//                 : <h2>There is no feedback</h2>}
//                 </Section>
//             : <p>Next time</p>}