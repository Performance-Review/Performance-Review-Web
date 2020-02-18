import { i18n } from '@lingui/core';
import { Box, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React from 'react';
import { Evaluation } from 'src/global-types';
import { NON_BREAKING_SPACE } from 'src/shared/constants';
import { EvaluationOutput } from 'src/shared/evaluation-output';
import { MultilineOutput } from 'src/shared/multiline-output';
import { FCProps } from 'src/shared/types/FCProps';
import { Styles } from 'src/shared/types/Styles';

interface OwnProps {
  evaluation: '%future added value' | Evaluation | null;
  evidence: string | null;
}

type Props = FCProps<OwnProps> & StyleProps;

export function ProjectPeerReviewOutput(props: Props) {
  const { evaluation, evidence } = props;
  const classes = useStyles(props);
  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="caption" gutterBottom>
            {i18n._('Evaluation')}
          </Typography>
          <EvaluationOutput value={evaluation} type="peer" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" gutterBottom>
            {i18n._('Accomplishments')}:
          </Typography>
          <MultilineOutput value={evidence || NON_BREAKING_SPACE} className={classes.typography} />
        </Grid>
      </Grid>
    </Box>
  );
}

const styles = (theme: Theme) => ({
  root: {
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
    padding: theme.spacing(2, 1.5),
  } as CSSProperties,
  typography: {
    color: theme.palette.common.black,
  } as CSSProperties,
});

const useStyles = makeStyles(styles, { name: 'ProjectPeerReviewOutput' });
type StyleProps = Styles<typeof styles>;