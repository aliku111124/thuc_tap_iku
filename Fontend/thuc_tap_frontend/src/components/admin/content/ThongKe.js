// ThongKe.js
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Container, Row, Col, Table, Card } from "react-bootstrap";


const ThongKe = () => {
  const { onTitleChange } = useOutletContext();

  useEffect(() => {
    onTitleChange("Thống kê doanh thu");
  }, [onTitleChange]);

  // Hardcoded sales data
  const salesData = [
    { month: "January", orders: 120, revenue: 1500000, growth: "10%" },
    { month: "February", orders: 130, revenue: 1700000, growth: "13%" },
    { month: "March", orders: 140, revenue: 2000000, growth: "18%" },
    { month: "April", orders: 160, revenue: 2200000, growth: "15%" },
    { month: "May", orders: 155, revenue: 2100000, growth: "14%" },
  ];

  // Chart data for the bar chart
  

  return (
    <Container className="mt-5">
      <Row>
        <Col>
        
          <Card className="mb-4">
            <Card.Body>
            
            </Card.Body>
          </Card>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Month</th>
                <th>Orders</th>
                <th>Revenue (VND)</th>
                <th>Growth Rate</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((data, index) => (
                <tr key={index}>
                  <td>{data.month}</td>
                  <td>{data.orders}</td>
                  <td>{data.revenue.toLocaleString("vi-VN")}</td>
                  <td>{data.growth}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ThongKe;
