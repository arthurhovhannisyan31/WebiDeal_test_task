// deps
import { makeStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) => ({
  container: {
    paddingTop: theme.spacing(5),
  },
  error: {
    color: 'red',
  },
  emphasize: {
    fontStyle: 'italic',
  },
}))