import AddUserForm from "../components/AddUserForm";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import UserList from "../components/UserList";
// import UserList from "../components/UserList";

export default function Test() {
  return (
    <div>
      <PageMeta
        title="React.js Test Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Test Page" />
      <AddUserForm onUserCreated={() => window.location.reload()} />
      <UserList />
    </div>
  );
}
