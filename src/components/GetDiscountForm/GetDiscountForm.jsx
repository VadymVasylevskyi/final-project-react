import  { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { openModal } from '../../features/modalSlice/modalSlice';
import GetDiscountButton from '../GetDiscountButton/GetDiscountButton';
import styles from './GetDiscountForm.module.css';
import style from '../../App.module.css'
import discountImage from '../../assets/svg/discount-form.svg';
import { API_URL } from '../../utils';

function DiscountForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFormValid() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API_URL}/sale/send`, {
        name,
        phone,
        email,
      });

      if (response.status === 200) {
        dispatch(openModal({
          title: 'Success',
          content: [
            'Your request has been submitted successfully!',
          ],
        }));
        setIsSubmitted(true);
        clearForm();
      }
    } catch (error) {
      dispatch(openModal({
        title: 'Error',
        content: 'There was an error submitting your request. Please try again later.',
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const isNameValid = () => /^[A-Za-z\s]+$/.test(name);
  const isPhoneValid = () => /^\d{10,15}$/.test(phone);
  const isEmailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid = () => isNameValid() && isPhoneValid() && isEmailValid();

  const clearForm = () => {
    setName('');
    setPhone('');
    setEmail('');
  };

  // const handleCloseModal = () => {
  //   dispatch(closeModal());
  //   clearForm();
  // };

  return (
    <div className={style.container}>
      <div className={styles.discountFormContainer}>
        <h2>5% off on the first order</h2>
        <div className={styles.formContainer}>
          <div className={styles.imageContainer}>
            <img src={discountImage} alt="Discount" />
          </div>
          
          <form onSubmit={handleSubmit} className={styles.formGroupBox}>
              <div className={styles.formGroup}>
                <label>
                  <input
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    required
                    aria-invalid={!isNameValid()}
                  />
                  {!isNameValid() && <div className={styles.tooltip}></div>} {/* Only letters are allowed. */}
                </label>
              </div>
              <div className={styles.formGroup}>
                <label>
                  <input
                    type="tel"
                    value={phone}
                    placeholder="Phone number"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    aria-invalid={!isPhoneValid()}
                  />
                  {!isPhoneValid() && <div className={styles.tooltip}></div>} {/* Only digits are allowed. Enter 10-15 digits. */}
                </label>
              </div>
              <div className={styles.formGroup}>
                <label>
                  <input
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-invalid={!isEmailValid()}
                  />
                  {!isEmailValid() && <div className={styles.tooltip}></div>} {/* Enter a valid email address. */}
                </label>
              </div>
              <GetDiscountButton
                onClick={handleSubmit}
                disabled={!isFormValid() || isSubmitting || isSubmitted}
              />
            </form>
          
        </div>
      </div>
    </div>
  );
}

export default DiscountForm;


// import axios from "axios";
// import { useState } from "react";
// import { useForm } from "react-hook-form";


// import style from "../../App.module.css";
// import styles from "./GetDiscountForm.module.css";
// import { API_URL } from "../../utils";
// import RegularButton from "../RegularButton/RegularButton";
// import Pets from "../../assets/svg/discount-form.svg"


// export default function GetDiscountForm() {
  
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post(`${API_URL}/sale/send`, data);
//       if (response.status === 200) {
//         setIsSubmitted(true);
//       }
//     } catch (error) {
//       console.error("Error submitting the form:", error);
//     }
//   };

//   return (
//     <section className={style.container}>
//       <div className={styles.discountMain}>
//         <h2>5% off on the first order</h2>
//         <div className={styles.mainContent}>
//           <img src={Pets} />
//           <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
//             <input
//               id="name"
//               placeholder="Name"
//               {...register("name", { required: "Name is required" })}
//             />
//             {errors.name && (
//               <p className={styles.error}>{errors.name.message}</p>
//             )}

//             <input
//               id="phone"
//               placeholder="Phone number"
//               {...register("phone", {
//                 required: "Phone number is required",
//                 pattern: {
//                   value: /^[0-9]+$/,
//                   message: "Phone number must be digits only",
//                 },
//               })}
//             />
//             {errors.phone && (
//               <p className={styles.error}>{errors.phone.message}</p>
//             )}

//             <input
//               id="email"
//               placeholder="Email"
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//                   message: "Invalid email address",
//                 },
//               })}
//             />
//             {errors.email && (
//               <p className={styles.error}>{errors.email.message}</p>
//             )}

//             <RegularButton
//               type="submit"
//               isActive={!isSubmitted}
//               disabled={isSubmitted}
//             >
//               {isSubmitted ? "Request Submitted" : "Get a discount"}
//             </RegularButton>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
