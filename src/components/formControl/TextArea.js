import React from "react";

const TextArea = ({ attr, label, error, onChange, help }) => {
  return (
    <>
      <label className="form-label">{label || attr.name}</label>
      <textarea
        {...attr}
        className={
          error ? "scroll form-control is-invalid" : "scroll form-control"
        }
        onChange={onChange}
      ></textarea>

      <div className={error ? "invalid-feedback" : "form-text"}>
        {error || help}
      </div>
    </>
  );
};

export default TextArea;
