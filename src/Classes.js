import React from 'react';
import {Grid, Segment} from 'semantic-ui-react';
import ClassesPage from './components/class-representation/ClassesPage'
import './components/css/classes.css';

const classObjs = [
  {
    images : [
      "index-images/algos-rslide.png",
      "alg-images/"
    ],
    captions : [
      "Live Demonstrations",
      "Running Time Analysis",
    ],
    descriptions : [
      "Advanced Data Structures and Algorithms",
      "In this sorting demo, a player holds in their left hand a deck of unsorted \"cards\" with numbers, and his task is to move them to the right hand one at a time in sorted order.",
      "Simpler algorithms were given a treatment that analyze expected amount of time the algorithm should run in the best and worst cases. Insertion sort the element that is least in the leftmost spot, with \"L\" serving as the algorithm's output list by the end.",
      "We explore dynamic"
    ]
  }
]

const Classes = () => {
 
  const classesNames = ['SENG 2000']
  const classObjs = [
    {
      images : [
        "index-images/algos-rslide.png",
        "alg-images/"
      ],
      captions : [
        "Live Demonstrations",
        "Running Time Analysis",
      ],
      descriptions : [
        "Advanced Data Structures and Algorithms",
        "In this sorting demo, a player holds in their left hand a deck of unsorted \"cards\" with numbers, and his task is to move them to the right hand one at a time in sorted order.",
        "Simpler algorithms were given a treatment that analyze expected amount of time the algorithm should run in the best and worst cases. Insertion sort the element that is least in the leftmost spot, with \"L\" serving as the algorithm's output list by the end.",
        "We explore dynamic"
      ]
    },
    
  ]
  
  return (
      <div className="classes">
        <Grid>
          <Grid.Column width={12}>
            <h2>Classes</h2>
            <Segment>
            <ClassesPage
              classesNames={classesNames}
              classObjs={classObjs}
            />
            </Segment>
            <h3>Check back soon for dynamic content from other courses</h3>
          </Grid.Column>
          <Grid.Column width={4}>
            <div className="ui four wide column">Logo goes here.</div>
          </Grid.Column>
        </Grid>
      </div>
  );
}

export default Classes;
