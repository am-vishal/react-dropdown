# Dropdown Menu

###### This is a simple React dropdown component that allows the user to select an option from a list.

### Getting Started

- Install the dependencies by running npm install or yarn install.
- Start the development server by running npm start or yarn start.
- The example should now be running on http://localhost:3000.

## Components

##### ➡️ The component is composed of three main parts: the App component, the Home component, and the Dropdown component.

### App component

###### ➡️ The App component is the parent component that renders the other two components. It uses the useState hook to manage the component's state. It has a state variable isShow which is a boolean that determines whether the Dropdown component should be visible or not. It also has a state variable selected which keeps track of the selected option, and a state variable options which keeps track of the options available in the dropdown.

### Home component

###### ➡️ The Home component displays a question and a button. When the user hovers over the button, the onMouseEnterHandler function passed as a prop is called, which sets the isShow state variable to true, causing the Dropdown component to be rendered.

### Dropdown component

###### ➡️ The Dropdown component takes in an options prop, which is an array of strings representing the options available in the dropdown. It maps through the options and creates an <p> element for each one. Each <p> element has an onClick event that calls the onClickHandler function passed as a prop, passing in the option selected.

### Built With

- ReactJS
- Font Awesome
