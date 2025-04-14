While working on a React + TypeScript project, I noticed a pattern that made adding new features a nightmare. 😵‍💫

🔴 The Problem:
We were storing user permissions like this:

```javascript
export type UserPermissions = { 
 canEdit: boolean 
 canDelete: boolean 
 canShare: boolean 
} 
```
At first, this seemed fine. But then we needed to add more permissions (e.g., canArchive, canExport, etc.). Suddenly, every change meant modifying multiple files and increasing the risk of bugs. 🤦‍♂️

✅ The Solution: Use a Map Pattern Instead!

Instead of hardcoding each permission, I switched to a dynamic approach using a Record type:

```javascript
export type PermissionMap = Record<string, boolean> 
export type User = { 
 name: string 
 email: string 
 permissions: PermissionMap 
} 
```
#### Now, whenever we need a new permission, we just add it dynamically—without touching multiple files! 🎯

⚠ But Wait… What About Control?

We don’t want developers adding random permissions that aren’t valid. So, we introduced a predefined set:

```javascript
type AllowedPermissions = 
 | "canEdit" 
 | "canDelete" 
 | "canShare" 
 | "canArchive" 

export type PermissionMap = { 
 [key in AllowedPermissions]: boolean 
} 
```
Now, we get both flexibility & safety—a win-win! 🔥