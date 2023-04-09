import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import tw from "tailwind-styled-components";
const useStyles = makeStyles(() => ({
  listItem: tw.div`
    py-4
    px-6
    hover:bg-gray-100
    cursor-pointer
  `,
  name: tw.h3`
    text-lg
    font-medium
    text-gray-800
    mb-2
  `,
  designation: tw.p`
    text-sm
    font-medium
    text-gray-600
    mb-1
  `,
  hospital: tw.p`
    text-sm
    font-medium
    text-gray-600
    mb-1
  `,
  fees: tw.p`
    text-lg
    font-medium
    text-green-500
  `,
}));

const Specialists = () => {
  const classes = useStyles();
  return (
    // <List>
    //   {specialists.map((specialist, index) => (
    //     <ListItem key={index} className={classes.listItem}>
    //       <ListItemText
    //         primary={<div className={classes.name}>{specialist.name}</div>}
    //         secondary={
    //           <>
    //             <div className={classes.designation}>
    //               {specialist.designation}
    //             </div>
    //             <div className={classes.hospital}>{specialist.hospital}</div>
    //           </>
    //         }
    //       />
    //       <div className={classes.fees}>{`$${specialist.fees}`}</div>
    //     </ListItem>
    //   ))}
    // </List>
    <div className="hello">
      hello
    </div>
  );
};

export default Specialists;
