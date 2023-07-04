import { useState } from 'react';
import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';

const INITIAL_STATE = {
  id: crypto.randomUUID(),
  name: '',
  number: '',
};

export const ContactForm = ({ onAddContact }) => {
  const [userData, setUserData] = useState({ ...INITIAL_STATE });
  const { name, number } = userData;

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact(userData);
    setUserData(INITIAL_STATE);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label className={style.label}>
        <p className={style.parag}>Name</p>
        <input
          type="text"
          name="name"
          value={name}
          // id={nanoid()}
          onChange={handleChange}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={style.label}>
        <p className={style.parag}>Number</p>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={style.submit}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
// import style from './ContactForm.module.css';

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = evt => {
//     const { name, value } = evt.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     const contactInfo = {
//       id: nanoid(),
//       name: this.state.name,
//       number: this.state.number,
//     };
//     this.props.onSubmit(contactInfo);
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   nameId = nanoid();

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className={style.form}>
//         <label htmlFor={this.nameId} className={style.label}>
//           <p className={style.parag}>Name</p>
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             id={this.nameId}
//             onChange={this.handleChange}
//             required
//           />
//         </label>
//         <label className={style.label}>
//           <p className={style.parag}>Number</p>
//           <input
//             type="tel"
//             name="number"
//             value={this.state.number}
//             onChange={this.handleChange}
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//         <button type="submit" className={style.submit}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// ContactForm.propTypes = {
//   contactInfo: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
