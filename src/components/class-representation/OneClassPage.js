import React from 'react'
import { Grid } from 'semantic-ui-react'
import ClassRow from './ClassRow'
const OneClassPage = ({classesName, classEl}) => {
  return (
    <div className="oneClassPage">
      <h2>{classesName.classesName}</h2>
      <Grid className="oneClass">
        <ClassRow
          image={classEl.image}
          caption={classEl.caption}
          description={classEl.description}
        />
      </Grid>
    </div>
  );
}

export default OneClassPage