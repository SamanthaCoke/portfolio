import React, {Component} from "react";
import {
  Container,
  Grid,
  Link,
  TextareaAutosize,
  Button,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles((theme) => ());
const styles = {
    root: {
      "& .MuiTextField-root": {
        margin: 1,
        width: "100%",
      },
    },
  }

class Contact extends Component {

 constructor(props) {
     super(props);
     this.state = {
         name: "",
         email: "",
         content: ""
     }
 }

 handleChange =({target}) => {
    let {name, value} = target; 
    this.setState({
        [name]: value
    })
 }  

 handleSendMessage =() => {
    let {name, email, content} = this.state;
    let message = {name, email, content}
    console.log("Sending infor to back end", message);
 }

  render() {

      return (
          <Container>
      <Container style={{ background: "rgba(0,0,0,.5)" }} maxWidth="lg">
        <h1> Contact </h1>
        <Grid container>
          <Grid container justify="center" spacing={5}>
            <Grid item>
              <Link href="https://www.linkedin.com/in/samanthacokeclark/">
                LinkedIn
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://github.com/SamanthaCoke">GitHub</Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <form className={this.props.classes.root} noValidate autoComplete="off">
          <Container maxWidth="sm">
            <div>
              <TextField
                fullWidth
                id="outlined-required"
                label="Name"
                defaultValue="Name"
                variant="outlined"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
                />
            </div>
            <div>
              <TextField
                id="outlined-required"
                label="Email"
                defaultValue="Hello World"
                variant="outlined"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
                />
            </div>
            <div style={{paddingLeft: '.7em'}}>
              <TextareaAutosize
                style={{width: '100%', height: '20vh'}}
                
                aria-label="message"
                placeholder="type a message ...."
                defaultValue="Let's connect! "
                value={this.state.content}
                name="content"
                onChange={this.handleChange}

                />

              {/* <TextField id="outlined-required" label="Message" defaultValue="Hello World" variant="outlined"/> */}
            </div>
            <div style={{textAlign: 'right'}}>
              <Button variant="outlined" onClick= {this.handleSendMessage} >Send Message</Button>
            </div>
          </Container>
        </form>
      </Container>
    </Container>
  );
}
}
export default withStyles(styles)(Contact);
