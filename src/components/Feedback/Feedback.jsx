import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleClick = (e) => {
        console.log(e.currentTarget.name)
        this.setState(prevState => ({[e.target.name]: prevState[e.target.name] + 1}))
    }

    countTotalFeedback = () => {
      return Object.values(this.state).reduce((acc, value) => {return acc += value}, 0)
    }

    countPositiveFeedbackPercentage = () => {
        if (this.state.good !== 0) {
            const result = this.state.good * 100 / this.countTotalFeedback();
                return result.toFixed(0) + '%'
        } else {
            return 0 + '%';
        }
    }

    render() {
        return <div>
          <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.handleClick}/>
            {this.countTotalFeedback() > 0
                ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
                : <h2>There is no feedback</h2>}
            </Section>
    </div>;
  }
}

export default Feedback;