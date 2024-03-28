import { useEffect, useState } from "react";
import { getFromLocalStorageReadBooks } from "../Utils/LocalStorageReadBooks";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { ResponsiveContainer } from "recharts";

const PagesToRead = () => {
  const [saveData, setSaveData] = useState([]);

  useEffect(() => {
    setSaveData(getFromLocalStorageReadBooks());
  }, []);

  const data = saveData.map((item) => ({
    name: item.bookName,
    pages: item.totalPages,
  }));

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { name, pages } = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <p className="label">{`${name} : ${pages}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="max-w-6xl mx-auto">
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="pages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
};

export default PagesToRead;
