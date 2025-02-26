import { StylesConfig } from 'react-select';

export const customStyles: StylesConfig<{ id: number; name: string; label: string; value: string; }, false> = {
  control: (base) => ({
    ...base,
    width: '200px',
    maxWidth: '100%',
    minWidth: '100px',
    borderRadius: '4px',
    color: '#000',
    fontSize: '14px',
    lineHeight: '20px',
    backgroundColor: '#fff',
    cursor: 'pointer',
  }),

  option: (base) => ({
    ...base,
    color: "#000",
    fontSize: "0.8rem",
    lineHeight: "1.75rem",
    width: "100%",
    background: "#fff",
    ":hover": {
      backgroundColor: "rgb(243 244 246)",
      color: "#000",
      cursor: "pointer",
    },
  }),

  menu: (base) => ({
    ...base,
    backgroundColor: "#fff",
    maxWidth: "14rem",
    border: "2px solid #000000",
    borderRadius: "5px",
    boxShadow: "5px 5px 0px 0px rgba(0,0,0,1)",
  }),

  placeholder: (base) => ({
    ...base,
    color: "#000",
    fontSize: "0.8rem",
    lineHeight: "1.75rem",
  }),
};
