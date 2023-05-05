import React, { Component } from 'react';
import { Section } from './section/Section';
import { FeedbackOptions } from './feedbackBtn/FeedbackBtn';
import { Statistics } from './statistics/Statistics';
import { Notification } from './notification/Notification';

const options = ['good', 'neutral', 'bad'];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.floor((100 / (good + neutral + bad)) * good) || 0;
  };

  onClickButton = e => {
    const element = e.currentTarget.dataset.type;
    console.log(element);
    this.setState(prevState => ({
      [element]: prevState[element] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onClickButton}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotal() === 0 ? (
           <Notification message="There is no feedback"/>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotal()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
