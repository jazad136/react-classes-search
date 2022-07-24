import React,{Fragment} from 'react'
import { Grid } from 'semantic-ui-react'
const ClassRow = ({image, caption, description}) => {
  return (
     <Fragment>
      <Grid.Column width={3}>
        {/* spacer */}
      </Grid.Column>
      <Grid.Column width={5}>
        <div className="image-2">{image.image}</div>
        <h3 className="imageCaption-2">{caption.caption}</h3>
      </Grid.Column>
      <Grid.Column width={5}>
        <div className="description-2">{description.description}</div>
      </Grid.Column>
      <Grid.Column width={3}>
        {/* spacer */}
      </Grid.Column>
    </Fragment>
  );
}

export default ClassRow