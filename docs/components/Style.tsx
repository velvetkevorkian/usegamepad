export const Style = () => (      <style>{`
body {
  font-family: sans-serif;
}

table {
  border-collapse: collapse;
}

td, th {
  border: 1px solid;
  padding: 0.25em;
}

/* axis values come out with many decimal places */
td:nth-of-type(2) {
  min-width: 25ch;
}

`}</style>)
