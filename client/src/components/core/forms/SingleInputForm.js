import { useCallback, useState } from "react";

const SingleInputForm = ({
  value,
  label,
  onChange,
  onSubmit,
  isSubmitting,
}) => {
  let Button;
  if (isSubmitting) {
    Button = (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else {
    Button = <button className="btn btn-primary">Submit</button>;
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>{label}</label>
        <input
          value={value}
          type="text"
          onChange={onChange}
          className="form-control"
          required
        />
      </div>
      {Button}
    </form>
  );
};

export const useSingleInputFormProps = (submitForm) => {
  const [value, setValue] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setSubmitting(true);
      await submitForm(value);
      setValue("");
      setSubmitting(false);
    },
    [value, submitForm]
  );

  const onChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  return [value, onChange, isSubmitting, onSubmit];
};

export default SingleInputForm;
