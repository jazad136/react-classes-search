import React from 'react'
import {Grid, Segment, Container, Image} from 'semantic-ui-react';
import OneClassPage from './OneClassPage';
const getImageFromClass = (wholeSet, index) => { 
  if(index >= wholeSet.images.length) { 
    return ''
  }
  return wholeSet.images[index]
}
const getDescrFromClass = (wholeSet, index) => { 
  if(index >= wholeSet.descriptions.length) { 
    return ''
  }
  return wholeSet.descriptions[index]
}
const getCaptionFromClass = (wholeSet, index) => { 
  if(index >= wholeSet.captions.length) { 
    return ''
  }
  return wholeSet.captions[index]
}
const ClassesPage = ({classesNames, classObjs}) => {
  const breakouts = []
  for(let i = 0; i < classObjs[0].descriptions.length; i++) { 
    const nextEl = {
        classesName: classesNames[0],
        image: getImageFromClass(classObjs[0], i),
        caption: getCaptionFromClass(classObjs[0], i),
        description: getDescrFromClass(classObjs[0], i)
    }
    breakouts.push(nextEl)
  }
  const classEls = breakouts.map(({classesName, image, caption, description}) => {
    return {
        classesName: {classesName},
        image: {image},
        caption: {caption},
        description: {description}
    };
  });
  
  return (
    <Container>
      <OneClassPage classEl={classEls[0]} classesName={classEls[0].classesName} />
    </Container>
  )
}

export default ClassesPage