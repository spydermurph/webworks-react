/*
// Example of how to integrate QuickAddCategory into your LandingPage dropdown

// Add to your LandingPage component imports:
import QuickAddCategory from "../components/QuickAddCategory";

// Add to your state:
const [showAddCategory, setShowAddCategory] = useState(false);

// Add this method to handle new categories:
const handleCategoryAdded = (newCategory: CategoryDTO) => {
  setCategories([...categories, newCategory]);
  setShowAddCategory(false);
  // Optionally select the new category
  // handleCategoryFilter(newCategory.categoryId);
};

// Update your dropdown to include "Add New Category" option:
{dropdownOpen && (
  <ul className="dropdown-menu show position-absolute" style={{ zIndex: 1000 }}>
    <li>
      <button
        className={`dropdown-item ${selectedCategory === null ? "active" : ""}`}
        onClick={() => {
          handleCategoryFilter(null);
          setDropdownOpen(false);
        }}
      >
        <i className="bi bi-list me-2"></i>
        All Categories
      </button>
    </li>
    <li><hr className="dropdown-divider" /></li>
    {categories.map((category) => (
      <li key={category.categoryId}>
        <button
          className={`dropdown-item ${selectedCategory === category.categoryId ? "active" : ""}`}
          onClick={() => {
            handleCategoryFilter(category.categoryId);
            setDropdownOpen(false);
          }}
        >
          <i className="bi bi-tag me-2"></i>
          {category.categoryName}
        </button>
      </li>
    ))}
    <li><hr className="dropdown-divider" /></li>
    <li>
      <button
        className="dropdown-item text-success"
        onClick={() => {
          setShowAddCategory(true);
          setDropdownOpen(false);
        }}
      >
        <i className="bi bi-plus-circle me-2"></i>
        Add New Category
      </button>
    </li>
  </ul>
)}

// Add the QuickAddCategory modal/component:
{showAddCategory && (
  <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
    <div className="col-md-6 col-lg-4">
      <QuickAddCategory
        onCategoryAdded={handleCategoryAdded}
        onClose={() => setShowAddCategory(false)}
      />
    </div>
  </div>
)}
*/
