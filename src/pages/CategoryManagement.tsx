import { useEffect, useState } from "react";
import { CategoryDTO } from "../lib/blogpost.model";
import { BlogApiService } from "../services/blogApiService";
import { AxiosError } from "axios";

interface CategoryFormData {
  categoryName: string;
}

export default function CategoryManagement() {
  const [categories, setCategories] = useState<CategoryDTO[]>([]);
  const [formData, setFormData] = useState<CategoryFormData>({ categoryName: '' });
  const [editingCategory, setEditingCategory] = useState<CategoryDTO | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      setLoading(true);
      const data = await BlogApiService.getCategories();
      setCategories(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError('Failed to load categories: ' + (error.response?.data?.message || error.message));
      } else {
        setError('An unexpected error occurred while loading categories');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.categoryName.trim()) {
      setError('Category name is required');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      if (editingCategory) {
        // Update existing category
        const updatedCategory = await BlogApiService.updateCategory(
          editingCategory.categoryId,
          { categoryName: formData.categoryName.trim() }
        );
        setCategories(categories.map(cat => 
          cat.categoryId === editingCategory.categoryId ? updatedCategory : cat
        ));
        setSuccess(`Category "${updatedCategory.categoryName}" updated successfully!`);
        setEditingCategory(null);
      } else {
        // Create new category
        const newCategory = await BlogApiService.createCategory({
          categoryName: formData.categoryName.trim()
        });
        setCategories([...categories, newCategory]);
        setSuccess(`Category "${newCategory.categoryName}" created successfully!`);
      }

      // Reset form
      setFormData({ categoryName: '' });
    } catch (error) {
      if (error instanceof AxiosError) {
        setError('Failed to save category: ' + (error.response?.data?.message || error.message));
      } else {
        setError('An unexpected error occurred while saving the category');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (category: CategoryDTO) => {
    setEditingCategory(category);
    setFormData({ categoryName: category.categoryName });
    setError(null);
    setSuccess(null);
  };

  const handleCancelEdit = () => {
    setEditingCategory(null);
    setFormData({ categoryName: '' });
    setError(null);
    setSuccess(null);
  };

  const handleDelete = async (categoryId: number, categoryName: string) => {
    if (!window.confirm(`Are you sure you want to delete the category "${categoryName}"? This action cannot be undone.`)) {
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setSuccess(null);
      
      await BlogApiService.deleteCategory(categoryId);
      setCategories(categories.filter(cat => cat.categoryId !== categoryId));
      setSuccess(`Category "${categoryName}" deleted successfully!`);
      
      // If we were editing this category, cancel the edit
      if (editingCategory?.categoryId === categoryId) {
        handleCancelEdit();
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setError('Failed to delete category: ' + (error.response?.data?.message || error.message));
      } else {
        setError('An unexpected error occurred while deleting the category');
      }
    } finally {
      setLoading(false);
    }
  };

  // Auto-clear messages after 5 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>
              <i className="bi bi-tags me-2"></i>
              Category Management
            </h2>
            <span className="badge bg-secondary">
              {categories.length} {categories.length === 1 ? 'category' : 'categories'}
            </span>
          </div>

          {/* Success Alert */}
          {success && (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <i className="bi bi-check-circle me-2"></i>
              {success}
              <button
                type="button"
                className="btn-close"
                onClick={() => setSuccess(null)}
                aria-label="Close"
              ></button>
            </div>
          )}

          {/* Error Alert */}
          {error && (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <i className="bi bi-exclamation-triangle me-2"></i>
              {error}
              <button
                type="button"
                className="btn-close"
                onClick={() => setError(null)}
                aria-label="Close"
              ></button>
            </div>
          )}

          {/* Add/Edit Category Form */}
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title mb-0">
                <i className={`bi ${editingCategory ? 'bi-pencil' : 'bi-plus-circle'} me-2`}></i>
                {editingCategory ? 'Edit Category' : 'Add New Category'}
              </h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-8">
                    <div className="mb-3">
                      <label htmlFor="categoryName" className="form-label">
                        Category Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="categoryName"
                        value={formData.categoryName}
                        onChange={(e) => setFormData({ categoryName: e.target.value })}
                        placeholder="Enter category name..."
                        required
                        maxLength={50}
                        disabled={loading}
                      />
                      <div className="form-text">
                        Category names should be descriptive and unique. Max 50 characters.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex align-items-end">
                    <div className="mb-3 w-100">
                      <div className="d-grid gap-2">
                        <button
                          type="submit"
                          className={`btn ${editingCategory ? 'btn-warning' : 'btn-primary'}`}
                          disabled={loading || !formData.categoryName.trim()}
                        >
                          {loading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                              {editingCategory ? 'Updating...' : 'Creating...'}
                            </>
                          ) : (
                            <>
                              <i className={`bi ${editingCategory ? 'bi-check2' : 'bi-plus'} me-2`}></i>
                              {editingCategory ? 'Update Category' : 'Add Category'}
                            </>
                          )}
                        </button>
                        {editingCategory && (
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleCancelEdit}
                            disabled={loading}
                          >
                            <i className="bi bi-x-circle me-2"></i>
                            Cancel Edit
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Categories List */}
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">
                <i className="bi bi-list me-2"></i>
                Existing Categories
              </h5>
            </div>
            <div className="card-body">
              {loading && categories.length === 0 ? (
                <div className="text-center py-4">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p className="mt-2 text-muted">Loading categories...</p>
                </div>
              ) : categories.length === 0 ? (
                <div className="text-center py-4">
                  <i className="bi bi-inbox display-1 text-muted"></i>
                  <h4 className="text-muted mt-3">No Categories Yet</h4>
                  <p className="text-muted">Add your first category using the form above.</p>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Category Name</th>
                        <th scope="col" className="text-end">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((category) => (
                        <tr key={category.categoryId} className={editingCategory?.categoryId === category.categoryId ? 'table-warning' : ''}>
                          <td>
                            <span className="badge bg-light text-dark">#{category.categoryId}</span>
                          </td>
                          <td>
                            <strong>{category.categoryName}</strong>
                            {editingCategory?.categoryId === category.categoryId && (
                              <span className="badge bg-warning text-dark ms-2">Editing</span>
                            )}
                          </td>
                          <td className="text-end">
                            <div className="btn-group" role="group">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-primary"
                                onClick={() => handleEdit(category)}
                                disabled={loading}
                                title="Edit category"
                              >
                                <i className="bi bi-pencil"></i>
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => handleDelete(category.categoryId, category.categoryName)}
                                disabled={loading}
                                title="Delete category"
                              >
                                <i className="bi bi-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}