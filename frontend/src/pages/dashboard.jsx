import { useEffect, useState } from "react";
import API from "../services/api";
import "../main.css";

export default function Dashboard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    API.get("/leads")
      .then((res) => setLeads(res.data))
      .catch(() => alert("Unauthorized"));
  }, []);

  const updateStatus = async (id, status) => {
    await API.put(`/leads/${id}`, { status });

    setLeads((prev) =>
      prev.map((lead) =>
        lead._id === id ? { ...lead, status } : lead
      )
    );
  };

  const deleteLead = async (id) => {
    if (!window.confirm("Delete this lead?")) return;

    await API.delete(`/leads/${id}`);

    setLeads((prev) =>
      prev.filter((lead) => lead._id !== id)
    );
  };

  return (
    <div className="dashboard">
      <h2>Mini CRM Dashboard</h2>

      <table className="lead-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Notes</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead._id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>

              <td>
                <select
                  value={lead.status}
                  onChange={(e) =>
                    updateStatus(lead._id, e.target.value)
                  }
                  className={`status-${lead.status}`}
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="converted">Converted</option>
                </select>
              </td>

              <td>
                <textarea
                  defaultValue={lead.notes}
                  placeholder="Add follow-up notes"
                  onBlur={async (e) => {
                    await API.put(`/leads/${lead._id}/notes`, {
                      notes: e.target.value
                    });
                  }}
                />
              </td>

              <td>
                <button
                  onClick={() => deleteLead(lead._id)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "6px 10px",
                    cursor: "pointer",
                    borderRadius: "4px"
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
