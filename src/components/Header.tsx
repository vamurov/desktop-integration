import { MoonIcon } from "@chakra-ui/icons";
import { Box, Button, useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";

export function Header({title}: { title: string }) {
  const {toggleColorMode} = useColorMode()

  useEffect(() => {
    document.title = title;
  })

  return <Box bg='grey'>
    <div style={{display: 'flex', justifyContent: 'space-between', margin: '5px'}}>
      <h1>{title}</h1>
      <Button onClick={toggleColorMode}>
        <MoonIcon/>
      </Button>
    </div>
  </Box>
}
