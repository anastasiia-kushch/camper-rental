import { Form, Formik, Field } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { Icon } from '../Icons/Icons';
import css from './Filters.module.css';
import clsx from 'clsx';
import toast from 'react-hot-toast';

const equipment = [
  { name: 'ac', label: 'AC', icon: <Icon id="icon-ac" /> },
  { name: 'automatic', label: 'Automatic', icon: <Icon id="icon-automatic" /> },
  { name: 'kitchen', label: 'Kitchen', icon: <Icon id="icon-kitchen" /> },
  { name: 'tv', label: 'TV', icon: <Icon id="icon-tv" /> },
  { name: 'wc', label: 'WC', icon: <Icon id="icon-wc" /> },
];

const type = [
  { name: 'van', label: 'Van', icon: <Icon id="icon-van" /> },
  { name: 'fully', label: 'Fully integrated', icon: <Icon id="icon-fully" /> },
  { name: 'alcove', label: 'Alcove', icon: <Icon id="icon-alcove" /> },
];

export default function Filters({ onSubmit }) {
  const [locationSelected, setLocationSelected] = useState(false);

  const handleLocationChange = () => {
    setLocationSelected(true);
  };

  const initialValues = {
    location: '',
    filters: {
      ac: false,
      automatic: false,
      kitchen: false,
      tv: false,
      wc: false,
    },
    vehicleType: {
      van: false,
      fully: false,
      alcove: false,
    },
  };

  const validationSchema = Yup.object({
    location: Yup.string().trim(),
    filters: Yup.object().shape({
      ac: Yup.boolean(),
      automatic: Yup.boolean(),
      kitchen: Yup.boolean(),
      tv: Yup.boolean(),
      wc: Yup.boolean(),
    }),
    vehicleType: Yup.object().shape({
      van: Yup.boolean(),
      fully: Yup.boolean(),
      alcove: Yup.boolean(),
    }),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange={false}
    >
      {({ values }) => (
        <Form className={css.formCont}>
          <div>
            <label htmlFor="location" className={css.label}>
              Location
            </label>
            <div className={css.locationCont}>
              <div className={css.locationIcon}>
                {locationSelected ? (
                  <Icon
                    id="icon-location"
                    stroke={'#101828'}
                    fill={'none'}
                    width={'16'}
                    height={'16'}
                  />
                ) : (
                  <Icon
                    id="icon-location"
                    stroke={'rgba(16, 24, 40, 0.6)'}
                    fill={'none'}
                    width={'16'}
                    height={'16'}
                  />
                )}
              </div>
              <Field
                id="location"
                name="location"
                type="text"
                onFocus={handleLocationChange}
                className={css.locationInput}
                placeholder="Location"
              />
            </div>
          </div>
          <div className={css.filtersCont}>
            <h2 className={css.filtersTitle}>Filters</h2>
            <h3>Vehicle equipment</h3>
            <hr className={css.hr} />
            <div className={css.equipmentList}>
              {equipment.map((filter) => (
                <label
                  key={filter.name}
                  className={clsx(css.item, {
                    [css.checkedItem]: values.filters[filter.name],
                  })}
                >
                  <Field
                    type="checkbox"
                    name={`filters.${filter.name}`}
                    className={css.hiddenCheckbox}
                  />
                  <span className={css.icon}>{filter.icon}</span>
                  {filter.label}
                </label>
              ))}
            </div>

            <div className={css.filtersCont}>
              <h3>Vehicle type</h3>
              <hr className={css.hr} />
              <div className={css.typeList}>
                {type.map((filter) => (
                  <label
                    key={filter.name}
                    className={clsx(css.item, {
                      [css.checkedItem]: values.vehicleType[filter.name],
                    })}
                  >
                    <Field
                      type="checkbox"
                      name={`vehicleType.${filter.name}`}
                      className={css.hiddenCheckbox}
                    />
                    <span className={css.icon}>{filter.icon}</span>
                    {filter.label}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <button type="submit" className={css.button}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
}
