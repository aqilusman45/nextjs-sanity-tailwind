import { Button, Grid, Stack } from '@sanity/ui'

export function LinkTypes(props) {
  return (
    <Stack space={3}>
      <Grid columns={3} gap={1}>
        <Button>One button</Button>
      </Grid>
    </Stack>
  )
}
