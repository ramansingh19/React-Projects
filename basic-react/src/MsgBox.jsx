function MsgBox({username , textcolor}) {
  let styles = {color : textcolor};
  return (
    <h1 style={styles}>{username}</h1>
  );
}

export default MsgBox;