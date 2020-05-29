import React from "react";
import { Box, Button } from "rebass";

const Pagination = ({ fetchData, page }) => (
  <Box>
    <Button onClick={() => fetchData({ page: page - 1 })}>Prev</Button>
    <Button onClick={() => fetchData({ page: page + 1 })}>Next</Button>
  </Box>
);

export default Pagination;
