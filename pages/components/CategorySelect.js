import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { CATEGORIES } from "../../redux/constant";

const CategorySelect = ({ category, setCategory }) => {
  const handleChange = (e) => {
    const category = e.target.value;
    setCategory(category);
  };
  return (
    <FormControl>
      <InputLabel> labelPlaceholder</InputLabel>
      <Select>
        <MenuItem>Dropdown placeholder</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CategorySelect;
