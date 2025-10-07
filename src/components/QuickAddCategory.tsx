import { useState } from "react";
import { CategoryDTO } from "../lib/blogpost.model";
import { BlogApiService } from "../services/blogApiService";
import { AxiosError } from "axios";

interface QuickAddCategoryProps {
  onCategoryAdded?: (category: CategoryDTO) => void;
  onClose?: () => void;
}

export default function QuickAddCategory({ onCategoryAdded, onClose }: QuickAddCategoryProps) {
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!categoryName.trim()) {
      setError("Category name is required");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const newCategory = await BlogApiService.createCategory({
        categoryName: categoryName.trim()
      });
      
      // Reset form
      setCategoryName("");
      
      // Notify parent component
      if (onCategoryAdded) {
        onCategoryAdded(newCategory);
      }
      
      // Close if it's a modal
      if (onClose) {
        onClose();
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data?.message || "Failed to create category");
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="card-title mb-0">
            <i className="bi bi-plus-circle me-2"></i>
            Quick Add Category
          </h6>
          {onClose && (
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          )}
        </div>
      </div>
      <div className="card-body">
        {error && (
          <div className="alert alert-danger alert-sm" role="alert">
            <i className="bi bi-exclamation-triangle me-2"></i>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="quickCategoryName" className="form-label">
              Category Name
            </label>
            <input
              type="text"
              className="form-control"
              id="quickCategoryName"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Enter category name..."
              required
              maxLength={50}
              disabled={loading}
              autoFocus
            />
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            {onClose && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
                disabled={loading}
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading || !categoryName.trim()}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                  Creating...
                </>
              ) : (
                <>
                  <i className="bi bi-plus me-2"></i>
                  Add Category
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}