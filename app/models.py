from pydantic import BaseModel
from typing import Dict, Optional

# Model for User Preferences
class UserPreferences(BaseModel):
    language: str
    timezone: str
    notifications: Dict[str, bool]

# Model for Product Settings
class ProductSettings(BaseModel):
    product_name: str
    feature_flags: Dict[str, bool]

# Model for Access Permissions
class AccessPermissions(BaseModel):
    role: str
    permissions: list[str]

# Model for UI/UX Themes
class UIUXThemes(BaseModel):
    theme: str
    branding: Dict[str, str]

# Complete Configuration Model
class ClientConfig(BaseModel):
    client_id: str
    user_preferences: UserPreferences
    product_settings: ProductSettings
    access_permissions: AccessPermissions
    ui_ux_themes: UIUXThemes


