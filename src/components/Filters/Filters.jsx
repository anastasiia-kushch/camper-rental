import { Form, Formik, Field } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import LocationIcon from '../LocationIcon/LocationIcon';
import { Icon } from '../Icons/Icons';
import css from './Filters.module.css';
import clsx from 'clsx';

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

export default function Filters() {
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

  const validationSchema = Yup.object({});

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form className={css.formCont}>
          <div>
            <label htmlFor="location" className={css.label}>
              Location
            </label>
            <div className={css.locationCont}>
              <div className={css.locationIcon}>
                <LocationIcon
                  color={locationSelected ? '#101828' : 'rgba(16, 24, 40, 0.6)'}
                />
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
